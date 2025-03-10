import DemoContextProvider from "../src/contexts/Users/provider";
import HeaderCounter from "../src/pages/demo-context/HeaderCounter";

export default async function DemoServerSide() {
    const blogs = await fetch(
        "https://61a1ef1b014e1900176de7d5.mockapi.io/api/v1/blogs"
    );
    const blogData = await blogs.json();

    console.log(`Author:minh.lam , DemoServerSide ,  demo 2:`);

    return (
        <DemoContextProvider data={blogData}>
            <HeaderCounter />
        </DemoContextProvider>
    );
}
