import './Header.css'
import { Box, Flex, Wrap, Link, Image, Drawer, Button, CloseButton, Portal } from "@chakra-ui/react"
import { useState } from "react"

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header>
      <Flex justify="space-between" align="center" zIndex="sticky">
        <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)} >
          <Drawer.Trigger asChild>
            <Button variant="outline" size="sm" display={{ sm: "block", lg: "none",}}>
              --
              --
            </Button>
          </Drawer.Trigger>
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content>
                <Drawer.Header>
                  <Drawer.Title>Навигация</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                  <Flex direction="column">
                    <Link href="...">Каталог</Link>
                    <Link href="...">Преимущества</Link>
                    <Link href="...">Контакты</Link>
                    <Link href="...">О нас</Link>
                  </Flex>
                </Drawer.Body>
                <Drawer.Footer>
                  <Button variant="outline">Заказать заявку</Button>
                  <Flex direction="column">
                    <Link href="tel:+78126657804">+7 812 665-78-04</Link>
                    <Link href="mailto:sales@gkvertikal.ru">sales@gkvertikal.ru</Link>
                    <Link href="https://gkvertikal.ru/">Сайт Дистрибьютора</Link>
                  </Flex>
                </Drawer.Footer>
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Drawer.CloseTrigger>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
     
        <Box>
          <Image h={{base: "46px", md: "75px"}} src="/img/Logo-zoomlion-gkvertical.svg" />
        </Box>

        <Wrap gap="6" display={{ base:"none", sm: "none", lg: "flex"}} >
          <Link href="...">Каталог</Link>
          <Link href="...">Преимущества</Link>
          <Link href="...">Контакты</Link>
          <Link href="...">О нас</Link>
        </Wrap>

        <Flex direction="column" align="flex-end" display={{base: "none", sm: "none", lg: "flex"}}>
          <Link href="tel:+78126657804">+7 812 665-78-04</Link>
          <Link href="mailto:sales@gkvertikal.ru">sales@gkvertikal.ru</Link>
          <Link href="https://gkvertikal.ru/">Сайт Дистрибьютора</Link>

        </Flex>
      </Flex>

    </header>
  )
}

export default Header