export interface Shop {
  id: string;
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
  user: {
    item: {
      id: string;
      email: string;
      type: string;
      name?: string; // optional
      phone?: string; // optional
      address?: string; // optional
      bio?: string; // optional
    };
    href: string;
  };
}
