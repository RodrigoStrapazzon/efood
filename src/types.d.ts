declare interface MenuItem {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
  
  declare type Establishment = {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: MenuItem[]
  }