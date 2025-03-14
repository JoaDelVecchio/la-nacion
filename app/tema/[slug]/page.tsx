import React from "react";

const page = async ({ params }) => {
  const { slug } = await params;
  return <main>{slug}</main>;
};
export default page;
