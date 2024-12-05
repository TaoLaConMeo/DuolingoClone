"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { usePracticeModal } from "@/store/use-practice-modal";

export const PracticeModal = () => {
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = usePracticeModal();

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md bg-white">
        <DialogHeader>
          <div className="mb-5 flex w-full items-center justify-center">
            <Image src="/heart.svg" alt="Heart" height={100} width={100} />
          </div>

          <DialogTitle className="text-center text-2xl font-bold">
            Luyện Tập Bài Học
          </DialogTitle>

          <DialogDescription className="text-center text-base">
            Sử dụng các bài học luyện tập để lấy lại trái tim và điểm. Bạn không thể mất
            trái tim hoặc điểm trong các bài học luyện tập.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mb-4">
          <div className="flex w-full flex-col gap-y-4">
            <Button
              variant="primary"
              className="w-full"
              size="lg"
              onClick={close}
            >
              Tôi hiểu
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
