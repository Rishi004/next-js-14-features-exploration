export default function DashboardLayout({
    children,
    notifications,
    user,
    revenue,
    login
}: {
    children: React.ReactNode;
    notifications: React.ReactNode;
    user: React.ReactNode;
    revenue: React.ReactNode;
    login: React.ReactNode;
}) {
    const isLoggedIn = false;
    return isLoggedIn ? (
        <>
            <div>
                <div>{children}</div>
                <div style={{ display: "flex" }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                        <div>{user}</div>
                        <div>{revenue}</div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flex: 1
                        }}
                    >
                        {notifications}
                    </div>
                    d
                </div>
            </div>
        </>
    ) : (
        login
    );
}
