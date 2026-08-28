export type CountryText = Record<string, string>

export type MovementDetail = {
  nombreNeutro: string
  nombreAdapt: CountryText
  catNeutro: string
  catAdapt: CountryText
}

export type MovementRecord = {
  type: string
  sites: { MLA: boolean; MLB: boolean; MLM: boolean }
  rowActivity: MovementDetail
  activity: MovementDetail
}

export const movimientosFull: MovementRecord[] = [
  {
    type: "single_installment_consumption",
    sites: {
      MLA: true,
      MLB: true,
      MLM: true,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "- Si es en Marketplace o Mercado Libre: Compra\n- Si es un pago en un local físco (no importa si es con tarjeta física, virtual o QR): Pago en tienda física \n- Si es un pago en un sitio web (no importa si es con tarjeta física o virtual): Pago en tienda online",
        "🇧🇷": "- Si es en Marketplace o Mercado Libre: Compra\n- Si es un pago en un local físco (no importa si es con tarjeta física, virtual o QR): Pagamento em loja física \n- Si es un pago en un sitio web (no importa si es con tarjeta física o virtual): Pagamento online",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "- Si es en Marketplace o Mercado Libre: Compra\n- Si es un pago en un local físco (no importa si es con tarjeta física, virtual o QR): Pago en tienda física \n- Si es un pago en un sitio web (no importa si es con tarjeta física o virtual): Pago en tienda online",
        "🇧🇷": "- Si es en Marketplace o Mercado Libre: Compra\n- Si es un pago en un local físco (no importa si es con tarjeta física, virtual o QR): Pagamento em loja física \n- Si es un pago en un sitio web (no importa si es con tarjeta física o virtual): Pagamento online",
      },
    },
  },
  {
    type: "single_installment_consumption_reversed",
    sites: {
      MLA: true,
      MLB: true,
      MLM: true,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Devolución de dinero",
        "🇧🇷": "Reembolso",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Devuelto",
        "🇧🇷": "Reembolso",
      },
    },
  },
  {
    type: "single_installment_consumption_reversed_liquidated",
    sites: {
      MLA: true,
      MLB: true,
      MLM: true,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Devolución de dinero",
        "🇧🇷": "Reembolso",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Devuelto",
        "🇧🇷": "Reembolso",
      },
    },
  },
  {
    type: "single_installment_consumption_canceled",
    sites: {
      MLA: true,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "- Si es en Marketplace o Mercado Libre: Cancelado . Compra REVISAR CON PE\n- Si es un pago en un local físco (no importa si es con tarjeta física, virtual o QR): Cancelado . Pago en tienda física \n- Si es un pago en un sitio web (no importa si es con tarjeta física o virtual): Cancelado . Pago en tienda online",
        "🇧🇷": "Adaptación pendiente\n- Si es en Marketplace o Mercado Libre: Cancelado . Compra\n- Si es un pago en un local físco (no importa si es con tarjeta física, virtual o QR): Cancelado . Pagamento em loja física \n- Si es un pago en un sitio web (no importa si es con tarjeta física o virtual): Cancelado . Pagamento online",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Cancelado",
        "🇧🇷": "Cancelado",
      },
    },
  },
  {
    type: "multiple_installment_consumption_issuer",
    sites: {
      MLA: true,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "- Si es en Marketplace o Mercado Libre: Compra\n- Si es un pago en un local físco (no importa si es con tarjeta física, virtual o QR): Pago en tienda física \n- Si es un pago en un sitio web (no importa si es con tarjeta física o virtual): Pago en tienda online",
        "🇧🇷": "- Si es en Marketplace o Mercado Libre: Compra\n- Si es un pago en un local físco (no importa si es con tarjeta física, virtual o QR): Pagamento em loja física \n- Si es un pago en un sitio web (no importa si es con tarjeta física o virtual): Pagamento online",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "- Si es en Marketplace o Mercado Libre: Compra\n- Si es un pago en un local físco (no importa si es con tarjeta física, virtual o QR): Pago en tienda física \n- Si es un pago en un sitio web (no importa si es con tarjeta física o virtual): Pago en tienda online",
        "🇧🇷": "- Si es en Marketplace o Mercado Libre: Compra\n- Si es un pago en un local físco (no importa si es con tarjeta física, virtual o QR): Pagamento em loja física \n- Si es un pago en un sitio web (no importa si es con tarjeta física o virtual): Pagamento online",
      },
    },
  },
  {
    type: "multiple_installment_consumption_merchant_reversed",
    sites: {
      MLA: true,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Devolución de dinero",
        "🇧🇷": "Reembolso",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Devuelto",
        "🇧🇷": "Reembolso",
      },
    },
  },
  {
    type: "multiple_installment_consumption_issuer_reversed",
    sites: {
      MLA: true,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Devolución de dinero",
        "🇧🇷": "Reembolso",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Devuelto",
        "🇧🇷": "Reembolso",
      },
    },
  },
  {
    type: "multiple_installment_consumption_merchant_reversed_liquidate",
    sites: {
      MLA: true,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Devolución de dinero",
        "🇧🇷": "Reembolso",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Devuelto",
        "🇧🇷": "Reembolso",
      },
    },
  },
  {
    type: "multiple_installment_consumption_issuer_reversed_liquidated",
    sites: {
      MLA: true,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Devolución de dinero",
        "🇧🇷": "Reembolso",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Devuelto",
        "🇧🇷": "Reembolso",
      },
    },
  },
  {
    type: "multiple_installment_consumption_merchant_canceled",
    sites: {
      MLA: true,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "- Si es en Marketplace o Mercado Libre: Cancelado . Compra REVISAR CON PE\n- Si es un pago en un local físco (no importa si es con tarjeta física, virtual o QR): Cancelado . Pago en tienda física \n- Si es un pago en un sitio web (no importa si es con tarjeta física o virtual): Cancelado . Pago en tienda online",
        "🇧🇷": "Adaptación pendiente\n- Si es en Marketplace o Mercado Libre: Cancelado . Compra\n- Si es un pago en un local físco (no importa si es con tarjeta física, virtual o QR): Cancelado . Pagamento em loja física \n- Si es un pago en un sitio web (no importa si es con tarjeta física o virtual): Cancelado . Pagamento online",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Cancelado",
        "🇧🇷": "Cancelado",
      },
    },
  },
  {
    type: "credit_voucher",
    sites: {
      MLA: true,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Crédito otorgado",
        "🇧🇷": "Crédito concedido",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Crédito otorgado",
        "🇧🇷": "Crédito concedido",
      },
    },
  },
  {
    type: "credit_voucher_liquidated",
    sites: {
      MLA: true,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        default: "WIP",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        default: "WIP",
      },
    },
  },
  {
    type: "credit_voucher_reversed",
    sites: {
      MLA: true,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        default: "WIP",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        default: "WIP",
      },
    },
  },
  {
    type: "financial_interest",
    sites: {
      MLA: true,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Cargos",
        "🇧🇷": "Encargos",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Cargos",
        "🇧🇷": "Encargos",
      },
    },
  },
  {
    type: "financial_interest_refund",
    sites: {
      MLA: true,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Devolución de dinero",
        "🇧🇷": "Reembolso",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Devuelto",
        "🇧🇷": "Reembolso",
      },
    },
  },
  {
    type: "financial_interest_refund_reversed",
    sites: {
      MLA: true,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Cargos",
        "🇧🇷": "Encargos",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Cargos",
        "🇧🇷": "Encargos",
      },
    },
  },
  {
    type: "financial_interest_reversed",
    sites: {
      MLA: true,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Devolución de dinero",
        "🇧🇷": "Reembolso",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Devuelto",
        "🇧🇷": "Reembolso",
      },
    },
  },
  {
    type: "late_fee",
    sites: {
      MLA: true,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Cargos",
        "🇧🇷": "Encargos",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Cargos",
        "🇧🇷": "Encargos",
      },
    },
  },
  {
    type: "late_fee_refund",
    sites: {
      MLA: true,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Devolución de dinero",
        "🇧🇷": "Reembolso",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Devuelto",
        "🇧🇷": "Reembolso",
      },
    },
  },
  {
    type: "late_fee_refund_reversed",
    sites: {
      MLA: true,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Cargos",
        "🇧🇷": "Encargos",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Cargos",
        "🇧🇷": "Encargos",
      },
    },
  },
  {
    type: "late_fee_reversed",
    sites: {
      MLA: true,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Devolución de dinero",
        "🇧🇷": "Reembolso",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Devuelto",
        "🇧🇷": "Reembolso",
      },
    },
  },
  {
    type: "late_penalty",
    sites: {
      MLA: true,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Cargo",
        "🇧🇷": "Encargos",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Cargo",
        "🇧🇷": "Encargos",
      },
    },
  },
  {
    type: "late_penalty_refund",
    sites: {
      MLA: true,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "Comisión por pago tardío",
      nombreAdapt: {
        "🇦🇷": "Multa por atraso",
        "🇧🇷": "Multa por atraso",
      },
      catNeutro: "Reembolso",
      catAdapt: {
        "🇦🇷": "Devolución de dinero",
        "🇧🇷": "Reembolso",
      },
    },
    activity: {
      nombreNeutro: "Comisión por pago tardío",
      nombreAdapt: {
        "🇦🇷": "Multa por atraso",
        "🇧🇷": "Multa por atraso",
      },
      catNeutro: "Reembolso",
      catAdapt: {
        "🇦🇷": "Devuelto",
        "🇧🇷": "Reembolso",
      },
    },
  },
  {
    type: "late_penalty_refund_reversed",
    sites: {
      MLA: true,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "Comisión por pago tardío",
      nombreAdapt: {
        "🇦🇷": "Multa por atraso",
        "🇧🇷": "Multa por atraso",
      },
      catNeutro: "Cargo",
      catAdapt: {
        "🇦🇷": "Cargo",
        "🇧🇷": "Encargos",
      },
    },
    activity: {
      nombreNeutro: "Comisión por pago tardío",
      nombreAdapt: {
        "🇦🇷": "Multa por atraso",
        "🇧🇷": "Multa por atraso",
      },
      catNeutro: "Cargo",
      catAdapt: {
        "🇦🇷": "Cargo",
        "🇧🇷": "Encargos",
      },
    },
  },
  {
    type: "late_penalty_reversed",
    sites: {
      MLA: true,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "Comisión por pago tardío",
      nombreAdapt: {
        "🇦🇷": "Multa por atraso",
        "🇧🇷": "Multa por atraso",
      },
      catNeutro: "Reembolso",
      catAdapt: {
        "🇦🇷": "Devolución de dinero",
        "🇧🇷": "Reembolso",
      },
    },
    activity: {
      nombreNeutro: "Comisión por pago tardío",
      nombreAdapt: {
        "🇦🇷": "Multa por atraso",
        "🇧🇷": "Multa por atraso",
      },
      catNeutro: "Reembolso",
      catAdapt: {
        "🇦🇷": "Devuelto",
        "🇧🇷": "Reembolso",
      },
    },
  },
  {
    type: "insurance_consumption",
    sites: {
      MLA: false,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇧🇷": "WIP",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇧🇷": "WIP",
      },
    },
  },
  {
    type: "insurance_consumption_reversed",
    sites: {
      MLA: false,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇧🇷": "Reembolso",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇧🇷": "Reembolso",
      },
    },
  },
  {
    type: "insurance_consumption_reversed_liquidated",
    sites: {
      MLA: false,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇧🇷": "Reembolso",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇧🇷": "Reembolso",
      },
    },
  },
  {
    type: "chargeback",
    sites: {
      MLA: true,
      MLB: true,
      MLM: true,
    },
    rowActivity: {
      nombreNeutro: "- Con nombre del comercio: {Nombre del comercio}\n\n- Sin nombre del comercio: Pedido de reembolso",
      nombreAdapt: {
        "🇦🇷": "- Con nombre de comercio: {Nombre de comercio}\n- Sin nombre de comercio: Pedido de devolución",
        "🇧🇷": "- Con nombre de comercio: {Nome estabelecimento}\n-  Sin nombre de comercio: Pedido de reembolso",
      },
      catNeutro: "Reembolso",
      catAdapt: {
        "🇦🇷": "Categoría: Devolución de dinero\nEstado: \n- Contracargo en proceso\n- Contracargo pendiente\n- Contracargo cerrado\n- Cancelado",
        "🇧🇷": "Categoría: Reembolso\nEstado: \n- Contestação em andamento\n- Contestação pendente\n- Contestação encerrada\n- Cancelado",
      },
    },
    activity: {
      nombreNeutro: "- Con nombre del comercio: {Nombre del comercio}\n\n- Sin nombre del comercio: Pedido de reembolso",
      nombreAdapt: {
        "🇦🇷": "- Con nombre de comercio: {Nombre de comercio}\n- Sin nombre de comercio: Pedido de devolución",
        "🇧🇷": "- Con nombre de comercio: {Nome estabelecimento}\n-  Sin nombre de comercio: Pedido de reembolso",
      },
      catNeutro: "Reembolso",
      catAdapt: {
        "🇦🇷": "Categoría: Devolución de dinero\nEstado: \n- Contracargo en proceso\n- Contracargo pendiente\n- Contracargo cerrado\n- Cancelado",
        "🇧🇷": "Categoría: Reembolso\nEstado: \n- Contestação em andamento\n- Contestação pendente\n- Contestação encerrada\n- Cancelado",
      },
    },
  },
  {
    type: "chargeback_reversed",
    sites: {
      MLA: true,
      MLB: true,
      MLM: true,
    },
    rowActivity: {
      nombreNeutro: "- Con nombre del comercio: {nombre del comercio}\n\n- Sin nombre del comercio: Uso de la tarjeta de crédito",
      nombreAdapt: {
        "🇦🇷": "- Con nombre del comercio: {nombre del comercio}\n- Sin nombre del comercio: Uso de la tarjeta de crédito",
        "🇧🇷": "- Con nombre del comercio: {Nome estabelecimento}\n- Sin nombre del comercio: Uso do cartão de crédito",
        "🇲🇽": "- Con nombre del comercio: {nombre del comercio}\n- Sin nombre del comercio: Uso de la tarjeta de crédito",
      },
      catNeutro: "Compra",
      catAdapt: {
        "🇦🇷": "- Si es en Marketplace o Mercado Libre: Compra\n- Si es un pago en un local físco (no importa si es con tarjeta física, virtual o QR): Pago en tienda física \n- Si es un pago en un sitio web (no importa si es con tarjeta física o virtual): Pago en tienda online",
        "🇧🇷": "- Si es en Marketplace o Mercado Libre: Compra\n- Si es un pago en un local físco (no importa si es con tarjeta física, virtual o QR): Pagamento em loja física \n- Si es un pago en un sitio web (no importa si es con tarjeta física o virtual): Pagamento online",
      },
    },
    activity: {
      nombreNeutro: "- Con nombre del comercio: {nombre del comercio}\n\n- Sin nombre del comercio: Uso de la tarjeta de crédito",
      nombreAdapt: {
        "🇦🇷": "- Con nombre del comercio: {nombre del comercio}\n- Sin nombre del comercio: Uso de la tarjeta de crédito",
        "🇧🇷": "- Con nombre del comercio: {Nome estabelecimento}\n- Sin nombre del comercio: Uso do cartão de crédito",
        "🇲🇽": "- Con nombre del comercio: {nombre del comercio}\n- Sin nombre del comercio: Uso de la tarjeta de crédito",
      },
      catNeutro: "Compra",
      catAdapt: {
        "🇦🇷": "- Si es en Marketplace o Mercado Libre: Compra\n- Si es un pago en un local físco (no importa si es con tarjeta física, virtual o QR): Pago en tienda física \n- Si es un pago en un sitio web (no importa si es con tarjeta física o virtual): Pago en tienda online",
        "🇧🇷": "- Si es en Marketplace o Mercado Libre: Compra\n- Si es un pago en un local físco (no importa si es con tarjeta física, virtual o QR): Pagamento em loja física \n- Si es un pago en un sitio web (no importa si es con tarjeta física o virtual): Pagamento online",
      },
    },
  },
  {
    type: "withdrawal_visa",
    sites: {
      MLA: false,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇧🇷": "Saque",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇧🇷": "Saque",
      },
    },
  },
  {
    type: "withdrawal_visa_canceled",
    sites: {
      MLA: false,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇧🇷": "Reembolso",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇧🇷": "Reembolso",
      },
    },
  },
  {
    type: "withdrawal_visa_reversed",
    sites: {
      MLA: false,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇧🇷": "Reembolso",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇧🇷": "Reembolso",
      },
    },
  },
  {
    type: "withdrawal_visa_reversed_liquidated",
    sites: {
      MLA: false,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇧🇷": "Reembolso",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇧🇷": "Reembolso",
      },
    },
  },
  {
    type: "account_fund_transaction",
    sites: {
      MLA: true,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Transferencia enviada",
        "🇧🇷": "Transferência enviada",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Transferencia enviada",
        "🇧🇷": "Transferência enviada",
      },
    },
  },
  {
    type: "account_fund_transaction_canceled",
    sites: {
      MLA: true,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Cancelado - Transferencia enviada",
        "🇧🇷": "Cancelado -Transferência enviada",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Cancelado - Transferencia enviada",
        "🇧🇷": "Cancelado -Transferência enviada",
      },
    },
  },
  {
    type: "account_fund_transaction_reversed",
    sites: {
      MLA: true,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Devolución de dinero",
        "🇧🇷": "Reembolso",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Devuelto",
        "🇧🇷": "Reembolso",
      },
    },
  },
  {
    type: "account_fund_transaction_reversed_liquidated",
    sites: {
      MLA: true,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Devolución de dinero",
        "🇧🇷": "Reembolso",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Devuelto",
        "🇧🇷": "Reembolso",
      },
    },
  },
  {
    type: "payment",
    sites: {
      MLA: true,
      MLB: true,
      MLM: true,
    },
    rowActivity: {
      nombreNeutro: "Estado de cuenta de tu tarjeta",
      nombreAdapt: {
        "🇦🇷": "Resumen de tu tarjeta",
        "🇧🇷": "Fatura do seu cartão",
        "🇲🇽": "Estado de cuenta de tu tarjeta",
      },
      catNeutro: "Pago de estado de cuenta",
      catAdapt: {
        "🇦🇷": "Pago de resumen",
        "🇧🇷": "Pagamento de fatura",
      },
    },
    activity: {
      nombreNeutro: "Estado de cuenta de tu tarjeta",
      nombreAdapt: {
        "🇦🇷": "Resumen de tu tarjeta",
        "🇧🇷": "Fatura do seu cartão",
        "🇲🇽": "Estado de cuenta de tu tarjeta",
      },
      catNeutro: "Pago de estado de cuenta",
      catAdapt: {
        "🇦🇷": "Pago de resumen",
        "🇧🇷": "Pagamento de fatura",
      },
    },
  },
  {
    type: "payment_reversed",
    sites: {
      MLA: true,
      MLB: true,
      MLM: true,
    },
    rowActivity: {
      nombreNeutro: "Estado de cuenta de tu tarjeta",
      nombreAdapt: {
        "🇦🇷": "Resumen de tu tarjeta",
        "🇧🇷": "Fatura do seu cartão",
        "🇲🇽": "Estado de cuenta de tu tarjeta",
      },
      catNeutro: "Devolución de dinero - Pago de estado de cuenta",
      catAdapt: {
        "🇦🇷": "Devolución de dinero - Pago de resumen",
        "🇧🇷": "Reembolso - Pagamento de fatura",
      },
    },
    activity: {
      nombreNeutro: "Estado de cuenta de tu tarjeta",
      nombreAdapt: {
        "🇦🇷": "Resumen de tu tarjeta",
        "🇧🇷": "Fatura do seu cartão",
        "🇲🇽": "Estado de cuenta de tu tarjeta",
      },
      catNeutro: "Devolución de dinero - Pago de estado de cuenta",
      catAdapt: {
        "🇦🇷": "Pago de resumen - Devuelto",
        "🇧🇷": "Pagamento de fatura - Reembolso",
      },
    },
  },
  {
    type: "payment_reversed_liquidated",
    sites: {
      MLA: true,
      MLB: true,
      MLM: true,
    },
    rowActivity: {
      nombreNeutro: "Estado de cuenta de tu tarjeta",
      nombreAdapt: {
        "🇦🇷": "Resumen de tu tarjeta",
        "🇧🇷": "Fatura do seu cartão",
        "🇲🇽": "Estado de cuenta de tu tarjeta",
      },
      catNeutro: "Devolución de dinero - Pago de estado de cuenta",
      catAdapt: {
        "🇦🇷": "Devolución de dinero - Pago de resumen",
        "🇧🇷": "Reembolso - Pagamento de fatura",
      },
    },
    activity: {
      nombreNeutro: "Estado de cuenta de tu tarjeta",
      nombreAdapt: {
        "🇦🇷": "Resumen de tu tarjeta",
        "🇧🇷": "Fatura do seu cartão",
        "🇲🇽": "Estado de cuenta de tu tarjeta",
      },
      catNeutro: "Devolución de dinero - Pago de estado de cuenta",
      catAdapt: {
        "🇦🇷": "Pago de resumen - Devuelto",
        "🇧🇷": "Pagamento de fatura - Reembolso",
      },
    },
  },
  {
    type: "foreign_consumption",
    sites: {
      MLA: true,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "- Si es en Marketplace o Mercado Libre: Compra\n- Si es un pago en un local físco (no importa si es con tarjeta física, virtual o QR): Pago en tienda física \n- Si es un pago en un sitio web (no importa si es con tarjeta física o virtual): Pago en tienda online",
        "🇧🇷": "- Si es en Marketplace o Mercado Libre: Compra\n- Si es un pago en un local físco (no importa si es con tarjeta física, virtual o QR): Pagamento em loja física \n- Si es un pago en un sitio web (no importa si es con tarjeta física o virtual): Pagamento online",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "- Si es en Marketplace o Mercado Libre: Compra\n- Si es un pago en un local físco (no importa si es con tarjeta física, virtual o QR): Pago en tienda física \n- Si es un pago en un sitio web (no importa si es con tarjeta física o virtual): Pago en tienda online",
        "🇧🇷": "- Si es en Marketplace o Mercado Libre: Compra\n- Si es un pago en un local físco (no importa si es con tarjeta física, virtual o QR): Pagamento em loja física \n- Si es un pago en un sitio web (no importa si es con tarjeta física o virtual): Pagamento online",
      },
    },
  },
  {
    type: "foreign_consumption_canceled",
    sites: {
      MLA: true,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "- Si es en Marketplace o Mercado Libre: Cancelado . Compra REVISAR CON PE\n- Si es un pago en un local físco (no importa si es con tarjeta física, virtual o QR): Cancelado . Pago en tienda física \n- Si es un pago en un sitio web (no importa si es con tarjeta física o virtual): Cancelado . Pago en tienda online",
        "🇧🇷": "Adaptación pendiente\n- Si es en Marketplace o Mercado Libre: Cancelado . Compra\n- Si es un pago en un local físco (no importa si es con tarjeta física, virtual o QR): Cancelado . Pagamento em loja física \n- Si es un pago en un sitio web (no importa si es con tarjeta física o virtual): Cancelado . Pagamento online",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Cancelado",
        "🇧🇷": "Cancelado",
      },
    },
  },
  {
    type: "foreign_consumption_reversed",
    sites: {
      MLA: true,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Devolución de dinero",
        "🇧🇷": "Reembolso",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Devuelto",
        "🇧🇷": "Reembolso",
      },
    },
  },
  {
    type: "foreign_consumption_reversed_liquidated",
    sites: {
      MLA: true,
      MLB: true,
      MLM: false,
    },
    rowActivity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Devolución de dinero",
        "🇧🇷": "Reembolso",
      },
    },
    activity: {
      nombreNeutro: "",
      nombreAdapt: {},
      catNeutro: "",
      catAdapt: {
        "🇦🇷": "Devuelto",
        "🇧🇷": "Reembolso",
      },
    },
  },
]
