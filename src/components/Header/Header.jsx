import './Header.css'
import { Box,  Flex,  Wrap, Link, Image } from "@chakra-ui/react"
function Header() {
  return (
    <header>
      <Flex justify="space-between" align="center">
        <Box>
          <Image src="/img/zoomlion-glvertical.svg" />
        </Box>

        <Wrap gap="6">
          <Link href="...">Каталог</Link>
          <Link href="...">Преимущества</Link>
          <Link href="...">Контакты</Link>
          <Link href="...">О нас</Link>
        </Wrap>

        <Flex direction="column" align="flex-end">
          <Link href="tel:+78126657804">+7 812 665-78-04</Link>
          <Link href="mailto:sales@gkvertikal.ru">sales@gkvertikal.ru</Link>
          <Link href="https://gkvertikal.ru/">Сайт Дистрибьютора</Link>

        </Flex>
      </Flex>
    </header>
  )
}

export default Header