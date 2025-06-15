import { AppLayout } from '../components/AppLayout';
import "../styles/global.css";
import "../styles/reset.css";


export const metadata = {
  title: 'Xafpay',
  description: 'Take a look how xafpay aims to revolutionize the payment industry and register.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container--x">
          <AppLayout>
            {children}
          </AppLayout>
        </div>
      </body>
    </html>
  );
}
