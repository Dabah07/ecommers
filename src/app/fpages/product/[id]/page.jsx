
import { use } from "react";
import DitProduct from "@/componnet/pages/DitProduct";


export default function Page({ params }) {
  const resolvedParams = use(Promise.resolve(params));
  return <DitProduct id={resolvedParams.id} />;
} 






































// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const Page = () => {
//   const [product, setProduct] = useState({});
//   const params = useParams();

//   useEffect(() => {
//     axios.get(`http://localhost:3000/products/${params.id}`)
//       .then((response) => setProduct(response.data))
//       .catch((error) => console.error('Error fetching product:', error));
//   }, [params.id]);

//   return (
//     <>
//       <div>
//         <h1>{product.name}</h1>
//         <img src={product.image} alt={product.name} />
//       </div>
//     </>
//   );
// };

// export default Page;