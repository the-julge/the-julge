import { NoticeBase, ShopItem } from "./NoticeTypes";
import { UserItem } from "./userType";

export interface ApplyResponse {
  item: {
    id: string;
    createAt: string;
    notice: {
      href: string;
      item: NoticeBase;
    };
    shop: {
      href: string;
      item: ShopItem;
    };
    status: string;
    user: {
      href: string;
      item: UserItem;
    };
  };
  links: {
    body: { status: string };
    rel: string;
    description: string;
    href: string;
    method: string;
  }[];
}