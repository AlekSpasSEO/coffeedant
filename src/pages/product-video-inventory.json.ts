import { modernReviews } from '../data/review-registry';
import { bambinoReview } from '../data/reviews';
import { beanReviews } from '../data/bean-reviews';
export const GET = () => new Response(JSON.stringify([
  ...[bambinoReview,...modernReviews].map(r=>({slug:r.slug,brand:r.brand,model:r.model})),
  ...beanReviews.map(r=>({slug:r.slug,brand:r.roaster,model:r.coffee})),
]),{headers:{'Content-Type':'application/json; charset=utf-8'}});
