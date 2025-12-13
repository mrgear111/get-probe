import DocsShell from '../components/DocsShell';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <DocsShell>
            {children}
        </DocsShell>
    );
}
