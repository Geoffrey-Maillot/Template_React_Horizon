import { Skeleton } from "primereact/skeleton";

interface SkeletonUserListProps {}

export function SkeletonUserList({}: SkeletonUserListProps) {
  return (
    <>
      <Skeleton width="100%" height="3rem" borderRadius="16px"></Skeleton>
      <Skeleton width="100%" height="3rem" borderRadius="16px"></Skeleton>
      <Skeleton width="100%" height="3rem" borderRadius="16px"></Skeleton>
      <Skeleton width="100%" height="3rem" borderRadius="16px"></Skeleton>
      <Skeleton width="100%" height="3rem" borderRadius="16px"></Skeleton>
      <Skeleton width="100%" height="3rem" borderRadius="16px"></Skeleton>
      <Skeleton width="100%" height="3rem" borderRadius="16px"></Skeleton>
      <Skeleton width="100%" height="3rem" borderRadius="16px"></Skeleton>
      <Skeleton width="100%" height="3rem" borderRadius="16px"></Skeleton>
      <Skeleton width="100%" height="3rem" borderRadius="16px"></Skeleton>
    </>
  );
}
