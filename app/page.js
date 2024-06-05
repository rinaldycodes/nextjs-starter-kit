import Image from "next/image";
import { Suspense } from "react";
import ServerLoading from "./components/server/ServerLoading.component";
import ServerFetchingComponent from "./components/server/ServerFetchingComponent";
import { fetchData } from "@/lib/fetchData.lib";
import InteractiveComponent from "./components/clients/InteractiveComponent";

export default async function Home() {
  const initialData = await fetchData('https://jsonplaceholder.typicode.com/posts');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to my page</h1>
      <Suspense fallback={<ServerLoading />}>
        <ServerFetchingComponent />
      </Suspense>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <InteractiveComponent initialData={initialData}/>
    </main>
  );
}
