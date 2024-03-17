type layoutProps = {
    params: {};
    children: React.ReactNode;
};

export default function layout({ params, children }: layoutProps) {
    return <>{children}</>;
}
