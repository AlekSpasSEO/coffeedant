// Canonical identity copied from Product Registry V2. Preserve these IDs and URL.
// This is a checked-in review snapshot; it does not imply a live spreadsheet or API connection.
export const bambinoPlusIdentity = {
  "product_id": "CD-EM-000005",
  "family_id": "CD-EF-000005",
  "brand_id": "CD-BR-0005",
  "brand": "Breville",
  "canonical_name": "Breville Bambino Plus",
  "product_type": "Espresso machine",
  "identity_level": "Model",
  "model_number": "BES500",
  "generation": "Not stated",
  "primary_variant": "Base model code",
  "machine_category": "Semi-automatic",
  "region_scope": "US",
  "lifecycle_status": "Current, official model match",
  "identity_confidence": "High",
  "resolution_status": "Resolved with scope caveat",
  "official_source_url": "https://www.breville.com/en-us/product/bes500",
  "source_status": "Reviewed official model page",
  "checked_at": "2026-09-25",
  "legacy_url_count": "1",
  "notes": "Legacy URL says Bambino while the record names Bambino Plus. Official model identity is BES500. Confirms Bambino Plus BES500.",
  "canonical_product_id": "CD-EM-000005",
  "variant": [
    {
      "variant_id": "CD-EV-000005",
      "product_id": "CD-EM-000005",
      "variant_label": "Base model code",
      "model_number": "BES500",
      "region": "US",
      "voltage": "Not recorded",
      "color_finish": "Not recorded",
      "variant_status": "Model code recorded",
      "official_source_url": "https://www.breville.com/en-us/product/bes500",
      "notes": ""
    }
  ],
  "url_map": [
    {
      "url_id": "CD-URL-000005",
      "source_row": "6",
      "legacy_url": "https://coffeedant.com/espresso-machine/breville-bambino/",
      "legacy_brand": "Breville",
      "legacy_product_name": "Breville Bambino Plus",
      "product_id": "CD-EM-000005",
      "family_id": "CD-EF-000005",
      "variant_ids": "CD-EV-000005",
      "canonical_brand": "Breville",
      "canonical_product": "Breville Bambino Plus",
      "relationship": "URL-name mismatch retained",
      "mapping_confidence": "High",
      "preserve_url": "Yes",
      "redirect_decision": "No redirect decision",
      "notes": "Legacy URL says Bambino while the record names Bambino Plus. Official model identity is BES500."
    }
  ],
  "page_relationship": [
    {
      "relationship_id": "CD-PR-000005",
      "url_id": "CD-URL-000005",
      "product_id": "CD-EM-000005",
      "coverage_role": "Primary",
      "relationship_status": "Active relationship",
      "editorial_action": "No identity action required",
      "evidence_url": "https://www.breville.com/en-us/product/bes500",
      "checked_at": "2026-09-25",
      "notes": "Legacy URL says Bambino while the record names Bambino Plus. Official model identity is BES500."
    }
  ]
} as const;

// Attribute IDs and units match Registry V2 Spec Definitions. These records are
// a local enrichment snapshot, not assigned spreadsheet row IDs or live feed data.
export const bambinoPlusSpecs = [
  {
    "attribute_id": "CD-AT-000007",
    "attribute_key": "water_tank_l",
    "product_id": "CD-EM-000005",
    "variant_id": "CD-EV-000005",
    "region": "US",
    "raw_value": "1.9L (64 fl.oz)",
    "value": 1.9,
    "unit": "L",
    "evidence_id": "bambino-manual-2026-09-15",
    "checked_at": "2026-09-15"
  },
  {
    "attribute_id": "CD-AT-000015",
    "attribute_key": "portafilter_mm",
    "product_id": "CD-EM-000005",
    "variant_id": "CD-EV-000005",
    "region": "US",
    "raw_value": "54mm stainless steel portafilter",
    "value": 54,
    "unit": "mm",
    "evidence_id": "bambino-product-2026-09-15",
    "checked_at": "2026-09-15"
  },
  {
    "attribute_id": "CD-AT-000019",
    "attribute_key": "factory_brew_pressure_bar",
    "product_id": "CD-EM-000005",
    "variant_id": "CD-EV-000005",
    "region": "US",
    "raw_value": "9 bar extraction",
    "value": 9,
    "unit": "bar",
    "evidence_id": "bambino-product-2026-09-15",
    "checked_at": "2026-09-15"
  },
  {
    "attribute_id": "CD-AT-000020",
    "attribute_key": "pid_control",
    "product_id": "CD-EM-000005",
    "variant_id": "CD-EV-000005",
    "region": "US",
    "raw_value": "Digital Temperature Control (PID)",
    "value": true,
    "unit": null,
    "evidence_id": "bambino-manual-2026-09-15",
    "checked_at": "2026-09-15"
  },
  {
    "attribute_id": "CD-AT-000029",
    "attribute_key": "brew_steam_simultaneous",
    "product_id": "CD-EM-000005",
    "variant_id": "CD-EV-000005",
    "region": "US",
    "raw_value": null,
    "source_summary": "The reviewer explicitly states brewing and steaming cannot happen simultaneously.",
    "value": false,
    "unit": null,
    "evidence_id": "bambino-seriouseats-2026-09-15",
    "checked_at": "2026-09-15"
  },
  {
    "attribute_id": "CD-AT-000030",
    "attribute_key": "claimed_brew_ready_s",
    "product_id": "CD-EM-000005",
    "variant_id": "CD-EV-000005",
    "region": "US",
    "raw_value": "3 seconds",
    "value": 3,
    "unit": "s",
    "evidence_id": "bambino-product-2026-09-15",
    "checked_at": "2026-09-15"
  },
  {
    "attribute_id": "CD-AT-000035",
    "attribute_key": "auto_milk",
    "product_id": "CD-EM-000005",
    "variant_id": "CD-EV-000005",
    "region": "US",
    "raw_value": "Auto and manual milk",
    "value": true,
    "unit": null,
    "evidence_id": "bambino-product-2026-09-15",
    "checked_at": "2026-09-15"
  },
  {
    "attribute_id": "CD-AT-000038",
    "attribute_key": "grinder_integrated",
    "product_id": "CD-EM-000005",
    "variant_id": "CD-EV-000005",
    "region": "US",
    "raw_value": null,
    "source_summary": "The documented workflow requires separate coffee grinding and manual dosing.",
    "value": false,
    "unit": null,
    "evidence_id": "bambino-manual-2026-09-15",
    "checked_at": "2026-09-15"
  }
] as const;

export const bambinoPlusEvidence = [
  {
    "id": "bambino-product-2026-09-15",
    "type": "Official product fact",
    "url": "https://www.breville.com/en-us/product/bes500",
    "region": "US",
    "checked_at": "2026-09-15"
  },
  {
    "id": "bambino-manual-2026-09-15",
    "type": "Official manual",
    "url": "https://assets.breville.com/BES500/BES500_USCM_IB_Y25_LR.pdf",
    "region": "US/Canada/Mexico",
    "checked_at": "2026-09-15"
  },
  {
    "id": "bambino-seriouseats-2026-09-15",
    "type": "Independent firsthand review",
    "url": "https://www.seriouseats.com/breville-bambino-plus-review-8412244",
    "region": "US context; exact unit SKU not stated",
    "checked_at": "2026-09-15"
  }
] as const;

// Dated manufacturer price observation. This is not an Amazon offer or an
// exact color/ASIN match. Never emit it as a live Offer without fresh validation.
export const bambinoPlusPrice = {
  "amount": 499.95,
  "currency": "USD",
  "region": "US",
  "checked_at": "2026-09-25",
  "source_url": "https://www.breville.com/en-us/product/bes500",
  "kind": "dated-manufacturer-price",
  "exact_sellable_variant_verified": false
} as const;

const spec = (key: string) => {
  const result = bambinoPlusSpecs.find((entry) => entry.attribute_key === key);
  if (!result) throw new Error(`Missing verified Bambino specification: ${key}`);
  return result;
};

export const bambinoPlusFacts = [
  { label: 'Heater ready (claimed)', value: `${spec('claimed_brew_ready_s').value} seconds` },
  { label: 'Portafilter', value: `${spec('portafilter_mm').value} mm` },
  { label: 'Tank', value: `${spec('water_tank_l').value} L` },
  { label: 'Milk', value: spec('auto_milk').value ? 'Auto + manual' : 'Manual' },
  { label: 'Grinder', value: spec('grinder_integrated').value ? 'Built in' : 'Separate' },
  { label: 'Brew + steam', value: spec('brew_steam_simultaneous').value ? 'Together' : 'Sequential' },
];
