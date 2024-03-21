import styled from "@emotion/styled";
import UiImage from "./components/UiImage";
import UiPostContent from "./components/UiPostContent";

export interface PostProps {
  id: string;
  shopId: string;
  name: string;
  duration: string;
  workhour: number;
  address: string;
  hourlyPay: number;
  originalHourlyPay: number;
  imageUrl: string;
  closed: boolean;
  startsAt: string;
}

export default function Post({ item }: { item: PostProps }) {
  const {
    shopId,
    id,
    imageUrl,
    name,
    duration,
    workhour,
    address,
    hourlyPay,
    originalHourlyPay,
    closed,
    startsAt,
  } = item;

  return (
    <CardLink href={`/shops/${shopId}/notices/${id}`}>
      <UiImage
        hourlyPay={hourlyPay}
        originalHourlyPay={originalHourlyPay}
        closed={closed}
        imageUrl={imageUrl}
        startsAt={startsAt}
      />
      <UiPostContent
        name={name}
        duration={duration}
        workhour={workhour}
        address={address}
        hourlyPay={hourlyPay}
      />
    </CardLink>
  );
}

const CardLink = styled.a`
  display: flex;
  flex-direction: column;
  color: rgb(51, 51, 51);
  cursor: pointer;
  border: 1px solid var(--The-julge-gray-20, #e5e4e7);
  background-color: var(--The-julge-gray-00);

  &:hover {
    .card-image {
      opacity: 0.7;
    }
  }
`;
