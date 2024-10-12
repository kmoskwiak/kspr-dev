export const CTA = ({ text }: { text?: string }) => {
    return (
        <div>
            <a href="https://kspr.dev" style={{ padding: '1rem', border: '1px solid black', borderRadius: '5px' }}>
                {text || 'Click me'}
            </a>
        </div>
    );
}