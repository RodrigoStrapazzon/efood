import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Types
type Product = {
  id: number;
  price: number;
};

type PurchasePayload = {
  products: Product[];
  delivery: {
    receiver: string;
    address: {
      description: string;
      city: string;
      zipCode: string;
      number?: number;
      complement: string;
    };
  };
  payment: {
    card: {
      name: string;
      number: string;
      code: number;
      expires: {
        month: number;
        year: number;
      };
    };
  };
};

type PurchaseResponse = {
  orderId: string;
};

// Configuration
const API_CONFIG = {
  USE_MOCK_API: true,
  REAL_API_BASE_URL: "https://fake-api-tau.vercel.app/api/efood/",
  MOCK_DELAYS: {
    HOME: 800,
    PERFIL: 600,
    PURCHASE: 1200,
  },
};

// Mock Data
const mockEstablishments: Establishment[] = [
  {
    id: 1,
    titulo: "La Dolce Vita Trattoria",
    destacado: true,
    tipo: "Italiana",
    avaliacao: 4.9,
    descricao:
      "Autêntica culinária italiana com ingredientes frescos importados diretamente da Itália.",
    capa: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=400&fit=crop",
    cardapio: [
      {
        id: 1,
        nome: "Spaghetti Carbonara",
        descricao:
          "Massa italiana com bacon, ovos, queijo parmesão e pimenta preta",
        porcao: "500g",
        preco: 45.9,
        foto: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
      },
      {
        id: 2,
        nome: "Pizza Margherita",
        descricao: "Pizza clássica com molho de tomate, mussarela e manjericão",
        porcao: "8 fatias",
        preco: 52.0,
        foto: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop",
      },
      {
        id: 3,
        nome: "Tiramisu",
        descricao: "Sobremesa italiana tradicional com café e mascarpone",
        porcao: "1 porção",
        preco: 18.5,
        foto: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
      },
    ],
  },
  {
    id: 2,
    titulo: "Sushi Master",
    destacado: true,
    tipo: "Japonesa",
    avaliacao: 4.8,
    descricao:
      "Sushi fresco preparado por mestres japoneses com peixes selecionados.",
    capa: "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=800&h=400",
    cardapio: [
      {
        id: 4,
        nome: "Combo Sashimi",
        descricao: "Seleção de sashimis frescos: salmão, atum e peixe branco",
        porcao: "12 peças",
        preco: 68.0,
        foto: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: 5,
        nome: "Temaki de Salmão",
        descricao: "Cone de alga nori recheado com arroz, salmão e cebolinha",
        porcao: "1 unidade",
        preco: 15.9,
        foto: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: 6,
        nome: "Ramen Tonkotsu",
        descricao: "Macarrão japonês em caldo de porco com ovos e cebolinha",
        porcao: "1 tigela",
        preco: 42.0,
        foto: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=400&h=300",
      },
    ],
  },
  {
    id: 3,
    titulo: "Burger House",
    destacado: false,
    tipo: "Americana",
    avaliacao: 4.6,
    descricao:
      "Hambúrgueres artesanais com carnes premium e ingredientes frescos.",
    capa: "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=800&h=400",
    cardapio: [
      {
        id: 7,
        nome: "Classic Burger",
        descricao:
          "Hambúrguer de 180g, queijo cheddar, alface, tomate e molho especial",
        porcao: "1 unidade",
        preco: 28.9,
        foto: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: 8,
        nome: "Bacon Deluxe",
        descricao:
          "Hambúrguer duplo com bacon crocante, queijo e cebola caramelizada",
        porcao: "1 unidade",
        preco: 35.5,
        foto: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: 9,
        nome: "Batata Frita",
        descricao: "Batatas fritas crocantes temperadas com sal e ervas",
        porcao: "200g",
        preco: 12.0,
        foto: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=400&h=300",
      },
    ],
  },
  {
    id: 4,
    titulo: "Café & Cia",
    destacado: false,
    tipo: "Café",
    avaliacao: 4.7,
    descricao: "Café especial e lanches artesanais em ambiente aconchegante.",
    capa: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=800&h=400",
    cardapio: [
      {
        id: 10,
        nome: "Cappuccino Especial",
        descricao: "Café espresso com leite vaporizado e arte latte",
        porcao: "300ml",
        preco: 8.9,
        foto: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: 11,
        nome: "Croissant de Chocolate",
        descricao: "Croissant folhado recheado com chocolate belga",
        porcao: "1 unidade",
        preco: 6.5,
        foto: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=400&h=300",
      },
      {
        id: 12,
        nome: "Sanduíche Natural",
        descricao:
          "Pão integral com frango grelhado, alface, tomate e maionese",
        porcao: "1 unidade",
        preco: 18.0,
        foto: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=400&h=300",
      },
    ],
  },
];

const mockPurchaseResponse = {
  orderId: "ORDER-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
};

// Utility functions
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock API implementation
const mockApi = {
  // Get all establishments (home page)
  async getHome(): Promise<Establishment[]> {
    await delay(API_CONFIG.MOCK_DELAYS.HOME);
    return mockEstablishments;
  },

  // Get specific establishment by ID
  async getPerfil(id: string): Promise<Establishment> {
    await delay(API_CONFIG.MOCK_DELAYS.PERFIL);
    const establishment = mockEstablishments.find(
      (est) => est.id.toString() === id
    );

    if (!establishment) {
      throw new Error(`Establishment with id ${id} not found`);
    }

    return establishment;
  },

  // Process purchase
  async purchase(_payload: any): Promise<{ orderId: string }> {
    await delay(API_CONFIG.MOCK_DELAYS.PURCHASE);

    // Simulate occasional failures (5% chance)
    if (Math.random() < 0.05) {
      throw new Error("Payment processing failed. Please try again.");
    }

    return mockPurchaseResponse;
  },
};

// Main API
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_CONFIG.REAL_API_BASE_URL,
  }),
  endpoints: (builder) => {
    if (API_CONFIG.USE_MOCK_API) {
      // Mock API endpoints
      return {
        getHome: builder.query<Establishment[], void>({
          queryFn: async () => {
            try {
              const data = await mockApi.getHome();
              return { data };
            } catch (error) {
              return {
                error: { status: 500, data: "Failed to fetch establishments" },
              };
            }
          },
        }),
        getPerfil: builder.query<Establishment, string>({
          queryFn: async (id) => {
            try {
              const data = await mockApi.getPerfil(id);
              return { data };
            } catch (error) {
              return {
                error: { status: 404, data: "Establishment not found" },
              };
            }
          },
        }),
        purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
          queryFn: async (body) => {
            try {
              const data = await mockApi.purchase(body);
              return { data };
            } catch (error) {
              return {
                error: {
                  status: 400,
                  data:
                    error instanceof Error ? error.message : "Purchase failed",
                },
              };
            }
          },
        }),
      };
    } else {
      // Real API endpoints
      return {
        getHome: builder.query<Establishment[], void>({
          query: () => "restaurantes",
        }),
        getPerfil: builder.query<Establishment, string>({
          query: (id) => `restaurantes/${id}`,
        }),
        purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
          query: (body) => ({
            url: "checkout",
            method: "POST",
            body,
          }),
        }),
      };
    }
  },
});

export const { useGetHomeQuery, useGetPerfilQuery, usePurchaseMutation } = api;
export default api;
