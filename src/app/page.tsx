// export const dynamic = "force-dynamic";

// import Container from "@/components/Container";
// import ProductList from "@/components/ProductList";
// import SelectLimits from "@/components/SelectLimits";
// import { getdata } from "@/helpers/index";

// export default async function Home({
//   searchParams,
// }: {
//   searchParams?: { limit?: string };
// }) {
//   const limit = searchParams?.limit || "10";
//   const endpoint = `https://dummyjson.com/products?limit=${limit}`;
//   const { products } = await getdata(endpoint);
//   return (
//     <main>
//       <Container className="flex justify-between">
//         <h1 className="text-4xl text-gray-800 font-bold pt-8"> All Products</h1>
//         <SelectLimits />
//       </Container>
//       <ProductList products={products} />
//     </main>
//   );
// }
export const dynamic = "force-dynamic";

import Container from "@/components/Container";
import ProductList from "@/components/ProductList";
import LimitSelect from "@/components/SelectLimits";
import { getdata } from "@/helpers/index";
import Pagination from "@/components/Pagination";

interface Props {
  searchParams?: { limit?: string; page?: string };
}

export default async function Home({ searchParams }: Props) {
  const limit = Number(searchParams?.limit || 10);
  const page = Number(searchParams?.page || 1);
  const skip = (page - 1) * limit;

  const data = await getdata(limit, skip);
  const products = data.products || [];
  const total = data.total || 0;
  const totalPages = Math.ceil(total / limit);

  return (
    <main>
      <Container className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">All Products</h1>
        <LimitSelect />
      </Container>

      <ProductList products={products} />

      <Pagination page={page} totalPages={totalPages} limit={limit} />
    </main>
  );
}
