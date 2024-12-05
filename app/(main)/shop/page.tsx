import Image from "next/image";
import { redirect } from "next/navigation";

import FeedWrapper  from "@/components/feedwrapper";
import { Quests } from "@/components/quests";
import StickyWrapper from "@/components/stickywrapper";
import UserProgress from "@/components/user-progress";
import { getUserProgress, getUserSubscription } from "@/db/queries";

import { Items } from "./items";

const ShopPage = async () => {
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();

  const [userProgress, userSubscription] = await Promise.all([
    userProgressData,
    userSubscriptionData,
  ]);

  if (!userProgress || !userProgress.activeCourse) redirect("/courses");

  const isPro = !!userSubscription?.isActive;

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActive={isPro}
        />

        <Quests points={userProgress.points} />
      </StickyWrapper>

      <FeedWrapper>
        <div className="flex w-full flex-col items-center">
          <Image src="/shop.svg" alt="Shop" height={90} width={90} />

          <h1 className="my-6 text-center text-2xl font-bold text-neutral-800">
            Cửa Hàng
          </h1>
          <p className="mb-6 text-center text-lg text-muted-foreground">
            Tiêu Điểm Của Bạn Để Mua Những Vật Phẩm Giá Trị.
          </p>

          <Items
            hearts={userProgress.hearts}
            points={userProgress.points}
            hasActiveSubscription={isPro}
          />
        </div>
      </FeedWrapper>
    </div>
  );
};

export default ShopPage;
