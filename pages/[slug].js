import React from "react";
import { REDIRECT_URL } from "@/utils/api";

function RedirectPage() {
  return null;
}

export async function getServerSideProps({ params, res }) {
  const { slug } = params;
  console.log(slug);
  res.writeHead(301, {
    Location: `${REDIRECT_URL}/${slug}`,
  });
  res.end();
  return { props: {} };
}

export default RedirectPage;
