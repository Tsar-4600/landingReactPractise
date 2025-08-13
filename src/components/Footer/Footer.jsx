import { Grid, GridItem, Flex, Link, Image, Text, Highlight, Button } from "@chakra-ui/react"

function Footer() {
  return (

    <footer>
      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}   >
        <GridItem >
          <Flex direction={"column"} gap={5}>
            <Image h={{ base: "60px", md: "60px", lg: "75px" }} maxW="350px" src="/img/Logo-zoomlion-gkvertical.svg" />
            <Text><Highlight
              query={["Адресс:"]}
              styles={{ px: "0.5", bg: "brand.303", color: "brand.301" }}
            >Адресс: Московское шоссе, дом 42к2, офис 308</Highlight>
            </Text>
            <Text>
              <Highlight
                query={["Режим работы:"]}
                styles={{ px: "0.5", bg: "brand.303", color: "brand.301" }}
              >Режим работы: Пн-Пт 9:00 - 18:00</Highlight>
            </Text>
            <Text>Официальный партнёр Zoomlion </Text>


          </Flex>
        </GridItem>
        <GridItem   >
          <Flex direction={"column"} alignItems={"flex-start"} gap={5}>
            <Link href="...">Каталог</Link>
            <Link href="...">Преимущества</Link>
            <Link href="...">Контакты</Link>
            <Link href="...">О нас</Link>
          </Flex>
        </GridItem>
        <GridItem  >
          <Flex direction={"column"} alignItems={"flex-end"} gap={5}>
            <Link href="tel:+78126657804">+7 812 665-78-04</Link>
            <Link href="mailto:sales@gkvertikal.ru">sales@gkvertikal.ru</Link>
            <Link href="https://gkvertikal.ru/">Сайт Дистрибьютора</Link>
            <Button bg="brand.303">Оставить заявку</Button>
            <Text>© 2025 ГК Вертикаль</Text>
          </Flex>
        </GridItem>
      </Grid>
    </footer>




  )
}
export default Footer