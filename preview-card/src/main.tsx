import './style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Button, Card, Category, Container, ContentContainer, Image, OriginalPrice, Paragraph, PriceWrapper, ReducedPrice, Title } from './styles';

function App() {
  const [width, setWidth] = React.useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => window.removeEventListener('resize', handleWindowSizeChange);
  })

  const isMobile = width <= 768;

	return (
		<Container>
			<Card>
				<Image src={`../images/image-product-${isMobile ? 'mobile' : 'desktop'}.jpg`} />
				<ContentContainer>
					<Category>PERFUME</Category>
					<Title> Gabrielle Essence Eau De Parfum</Title>
					<Paragraph>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</Paragraph>
					<PriceWrapper>
						<ReducedPrice>$149.99</ReducedPrice>
						<OriginalPrice>$169.99</OriginalPrice>
					</PriceWrapper>
					<Button>
						<svg width='15' height='16' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z'
								fill='#FFF'
							/>
						</svg>
						Add to Cart
					</Button>
				</ContentContainer>
			</Card>
		</Container>
	);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
	</React.StrictMode>
);

