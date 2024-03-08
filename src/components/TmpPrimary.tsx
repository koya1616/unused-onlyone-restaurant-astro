import React from "react";
import {Image} from "@nextui-org/react";
import {Card, CardFooter, CardBody} from "@nextui-org/react";

type HappyCardProps = {
  name: string;
  gmap: string;
};

export const TmpPrimary = (props: HappyCardProps) => {
  return (
    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={props.name}
          className="w-full object-cover h-[140px]"
          // src="https://pub-c69f8d48b1ef401e8d4f42c1fa6deca7.r2.dev/yummy.png"
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{props.name}</b>
        {/* <p className="text-default-500">{item.price}</p> */}
      </CardFooter>
    </Card>
  )
}