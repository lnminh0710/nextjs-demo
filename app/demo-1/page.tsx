import AuthenticationProvider from "../src/contexts/Authentication/provider";
import DemoServerSideComponent from "../src/pages/demo-context/Demo";
import HeaderAmount from "../src/pages/demo-context/HeaderAmount";

export default async function DemoServerSide() {
    const blogs = await fetch(
        "https://61a1ef1b014e1900176de7d5.mockapi.io/api/v1/blogs"
    );
    const blogData = await blogs.json();

    console.log(`Author:minh.lam , DemoServerSide , blogData:`, blogData);

    return (
        <AuthenticationProvider data={blogData}>
            <HeaderAmount />
            <DemoServerSideComponent />
        </AuthenticationProvider>
    );
}
