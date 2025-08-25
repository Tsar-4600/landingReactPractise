import './Header.css'
import { Box, Flex, Wrap, Link, Image, Drawer, Button, CloseButton, Portal } from "@chakra-ui/react"
import { IoMenu } from "react-icons/io5";
import { useState } from "react"

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header>
      <Flex justify="space-between" align="center" zIndex="sticky">
        <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)} >
          <Drawer.Trigger asChild>
            <Button variant="outline" size="sm" display={{ sm: "block", lg: "none", }}>
              <IoMenu />
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
                  <Drawer.Context>
                    {(store) => (
                      <Flex direction="column">
                        <Link href="#catalog" onClick={() => store.setOpen(false)}>Каталог</Link>
                        <Link href="#secondHeroSection" onClick={() => store.setOpen(false)}>Преимущества</Link>
                        <Link href="#contacts" onClick={() => store.setOpen(false)}>Контакты</Link>
                        <Link href="#about" onClick={() => store.setOpen(false)}>О нас</Link>
                      </Flex>
                    )}
                  </Drawer.Context>
                </Drawer.Body>
                <Drawer.Footer>
                  <Flex direction="column">
                    <Link href="tel:+78123894545">+7 812 389-45-45</Link>
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
          <Image h={{ base: "46px", md: "75px" }} src="/img/Logo-zoomlion-gkvertical.svg" />
        </Box>

        <Wrap gap="6" display={{ base: "none", sm: "none", lg: "flex" }} >
          <Link href="#catalog">Каталог</Link>
          <Link href="#secondHeroSection">Преимущества</Link>
          <Link href="#contacts">Контакты</Link>
          <Link href="#about">О нас</Link>
        </Wrap>

        <Flex direction="column" align="flex-end" display={{ base: "none", sm: "none", lg: "flex" }}>
          <Link href="tel:+78123894545">+7 812 389-45-45</Link>
          <Link href="mailto:sales@gkvertikal.ru">sales@gkvertikal.ru</Link>
          <Link href="https://gkvertikal.ru/">Сайт Дистрибьютора</Link>

        </Flex>
      </Flex>

    </header>
  )
}

export default Header