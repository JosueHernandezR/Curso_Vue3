const app = Vue.createApp({
  data() {
    return {
      titulo: "Mi banco con Vue.js",
      cantidad: 500,
      enlace: "https://github.com/JosueHernandezR",
      estado: true,
      desactivar: false,
      servicios: ["Transferencias", "Pagos", "Retiros", "Giros"],
    };
  },
  methods: {
    agregarSaldo() {
      this.cantidad = this.cantidad + 100;
    },
    quitarSaldo(valor) {
      if (this.cantidad === 0) {
        alert("Saldo en cero!");
        this.desactivar = true;
        return;
      }
      this.cantidad = this.cantidad - valor;
    },
  },
  computed: {
      colorCantidad(){
          return this.cantidad > 500 ? 'text-success' : 'text-danger'
      },
      mayusculasTexto(){
          return this.titulo.toUpperCase()
      }
  }
});
