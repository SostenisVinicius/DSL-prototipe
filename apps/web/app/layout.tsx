import './style.css';
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body><nav><a href="/dashboard">Dashboard</a><a href="/design-systems">Design Systems</a><a href="/generations/new">Nova geração</a></nav>{children}</body></html>}
