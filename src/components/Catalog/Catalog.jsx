import { Heading, Tabs, Skeleton, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ProductList from "./catalogComponents/ProductList/ProductList";

function SubCategoryTabs({ products }) {

    const subcategories = [...new Set(products.map(p => p.subcategory))];
    
    if (subcategories.length === 0) {
        return <Box p={4}>Нет подкатегорий</Box>;
    }

    return (
        <Tabs.Root defaultValue={subcategories[0]} >
            <Tabs.List >
                {subcategories.map(subcategory => (
                    <Tabs.Trigger key={subcategory} value={subcategory} fontSize={{base: "12px", sm:"16px"}}   >
                        {subcategory}
                    </Tabs.Trigger>
                ))}
            </Tabs.List>

            {subcategories.map(subcategory => (
                <Tabs.Content key={subcategory} value={subcategory}  >
                    <ProductList
                        products={products.filter(p => p.subcategory === subcategory)}
                    />
                </Tabs.Content>
            ))}
        </Tabs.Root>
    );
}

function Catalog() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_DOMAIN_URL}/api/products`);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setProducts(data.products || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const categories = [...new Set(products.map(p => p.category))];
    
    if (loading) {
        return (
            <Box p={4}>
                <Skeleton height="40px" mb={4} />
                <Skeleton height="300px" />
            </Box>
        );
    }
    
    if (error) {
        return <Box p={4} color="red.500">Ошибка загрузки: {error}</Box>;
    }
    
    if (categories.length === 0) {
        return <Box p={4}>Нет доступных категорий</Box>;
    }

    return (
        <section id="catalog" className="catalog-section">
            <Heading paddingBottom="25px" as="h2" fontSize="3rem" lineHeight={1}>
                Каталог
            </Heading>
            
            <Tabs.Root defaultValue={categories[0]}>
                <Tabs.List>
                    {categories.map(category => (
                        <Tabs.Trigger key={category} value={category } fontSize={{base: "14px", sm:"16px"}} >
                            {category}
                        </Tabs.Trigger>
                    ))}
                </Tabs.List>

                {categories.map(category => (
                    <Tabs.Content key={category} value={category}>
                        <SubCategoryTabs 
                            products={products.filter(p => p.category === category)} 
                        />
                    </Tabs.Content>
                ))}
            </Tabs.Root>
        </section>
    );
}

export default Catalog;