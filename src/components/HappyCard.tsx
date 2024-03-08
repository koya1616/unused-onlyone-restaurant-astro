import React from "react";
import {Image} from "@nextui-org/react";
import {Card, CardHeader, CardBody} from "@nextui-org/react";

type HappyCardProps = {
  name: string;
  gmap: string;
};

export const HappyCard = (props: HappyCardProps) => {
  return (
    <Card className="py-4 max-w-xs">
      <CardHeader className="px-4 flex-col items-start">
        <h4 className="font-bold text-large">{props.name}</h4>
        <p className="text-tiny uppercase font-bold">{props.gmap}</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image src="/images/yummy.png" alt="A bird." />
      </CardBody>
    </Card>
  );
}
