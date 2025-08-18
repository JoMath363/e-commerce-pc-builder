export type Category = {
  id: string;
  name: string;
}

export type ProductFilter = {
  categories: string[];
  maxPrice: number | "";
  minPrice: number | "";
};

export type ProductPreview = {
  id: string;
  name: string;
  price: number | null;
  imageUrl?: string;
};

export type ProductData = {
  name: string;
  description: string;
  price: number | null;
  imageUrl?: string;
  specs: ProductSpecs;
};

export type ProductSpecs =
  {
    type: string,
    color: string,
    psu: string | null,
    side_panel: string,
    external_volume: number,
    internal_35_bays: number
  } | {
    core_count: number,
    core_clock: number,
    boost_clock: number,
    tdp: number,
    graphics: string,
    smt: boolean;
  } | {
    speed: number | number[],
    modules: number | number[],
    price_per_gb: number,
    color: string,
    first_word_latency: number,
    cas_latency: number
  } | {
    socket: string,
    form_factor: string,
    max_memory: number,
    memory_slots: number,
    color: string
  } | {
    type: string,
    efficiency: string,
    wattage: number,
    modular: string,
    color: string
  } | {
    capacity: number,
    price_per_gb: number,
    type: string,
    cache: number,
    form_factor: string,
    interface: string
  } | {
    chipset: string,
    memory: number,
    core_clock: number,
    boost_clock: number,
    color: string,
    length: number
  } | {
    size: number,
    color: string,
    rpm: null,
    airflow: number | number[],
    noise_level: number | number[],
    pwm: boolean;
  } | {
    rpm: number,
    noise_level: number,
    color: string,
    size: null
  }