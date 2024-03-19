const tw = (strings: any, ...values: any) =>
  String.raw({ raw: strings }, ...values);

export { tw };
