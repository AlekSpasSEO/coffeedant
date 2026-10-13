"""Create an original silent motion explainer, with no external footage."""
from pathlib import Path
import sys, math
sys.path.insert(0, str(Path('.cache/media-tools').resolve()))
import imageio_ffmpeg
from PIL import Image, ImageDraw, ImageFont

W,H,FPS=960,544,24
paper='#f8f5ed'; ink='#162c23'; yellow='#f3da00'; coffee='#84512b'
font=lambda size: ImageFont.truetype('C:/Windows/Fonts/arial.ttf',size)
bold=lambda size: ImageFont.truetype('C:/Windows/Fonts/arialbd.ttf',size)
steps=[('GRIND','18 g coffee','Use your basket\'s intended dose.'),('PREPARE','An even coffee bed','Distribute. Tamp level. Keep it repeatable.'),('EXTRACT','36 g espresso','Stop by weight. Taste the shot.'),('DILUTE','Add 108 g water','144 g finished drink. Adjust to taste.')]
dest=Path('public/journal/americano-sequence.mp4')
writer=imageio_ffmpeg.write_frames(str(dest),(W,H),fps=FPS,codec='libx264',quality=8,pix_fmt_in='rgb24',pix_fmt_out='yuv420p',macro_block_size=16,output_params=['-movflags','+faststart'])
writer.send(None)
for frame in range(FPS*16):
    t=frame/FPS; step=min(3,int(t/4)); fraction=(t%4)/4
    im=Image.new('RGB',(W,H),ink);d=ImageDraw.Draw(im)
    d.text((44,32),'COFFEEDANT / BREW LAB',font=bold(17),fill=yellow)
    d.text((44,70),'Build the cup. Keep the shot.',font=font(39),fill=paper)
    for i in range(4):
        x=44+i*218
        d.line((x,147,x+192,147),fill=yellow if i==step else '#567362',width=4)
        d.text((x,165),f'0{i+1} / {steps[i][0]}',font=bold(15),fill=yellow if i==step else '#b6c7bb')
    if step==0:
        for i in range(19):
            x=130+(i%5)*35;y=245+(i//5)*28
            d.ellipse((x,y,x+26,y+17),fill=coffee);d.line((x+4,y+12,x+22,y+4),fill=yellow,width=1)
        d.line((180,370,270,370),fill=yellow,width=3)
        for i in range(40):
            x=160+(i*13)%140;y=405+(i*17)%40
            d.ellipse((x,y,x+4,y+3),fill='#cba277')
    elif step==1:
        d.rounded_rectangle((120,300,330,395),radius=15,outline=paper,width=4)
        d.rectangle((129,312,321,385),fill=coffee)
        for i in range(50):
            x=135+(i*23)%180;y=316+(i*11)%61
            d.ellipse((x,y,x+3,y+3),fill='#cba277')
        d.line((158,265,292,265),fill=yellow,width=7)
        d.line((225,224,225,265),fill=yellow,width=10)
    else:
        d.rounded_rectangle((138,260,310,430),radius=18,outline=paper,width=4)
        d.arc((276,280,367,394),270,90,fill=paper,width=5)
        fill_height=35+int(95*fraction) if step==3 else int(40*fraction)+10
        d.rectangle((144,424-fill_height,304,424),fill=coffee if step==2 else '#b17b46')
        d.ellipse((144,416-fill_height,304,432-fill_height),fill='#d0a56a')
        d.line((225,213,225,410-fill_height),fill=yellow if step==2 else '#b6c7bb',width=4)
    d.text((435,245),steps[step][1],font=bold(34),fill=paper)
    d.text((435,303),steps[step][2],font=font(18),fill='#c5d1c7')
    d.text((435,350),'Example protocol / conventional double basket',font=font(14),fill='#a9b9ad')
    d.text((44,489),'Original animated schematic. No measured extraction or caffeine claim.',font=font(14),fill='#a9b9ad')
    d.line((44,525,916,525),fill='#567362',width=2)
    d.line((44,525,44+int(872*(frame+1)/(FPS*16)),525),fill=yellow,width=2)
    if frame==FPS*12:im.save('public/journal/americano-poster.webp',quality=88)
    writer.send(im.tobytes())
writer.close()
print(dest, dest.stat().st_size)
