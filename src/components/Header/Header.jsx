import './Header.css'
import { Box, Flex, Wrap, Link, Image, Drawer, Button, CloseButton, Portal } from "@chakra-ui/react"
import { useState } from "react"

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header>
      <Flex justify="space-between" align="center">
        <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
          <Drawer.Trigger asChild>
            <Button variant="outline" size="sm">
              ----
            </Button>
          </Drawer.Trigger>
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content>
                <Drawer.Header>
                  <Drawer.Title>Drawer Title</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </Drawer.Body>
                <Drawer.Footer>
                  <Button variant="outline">Cancel</Button>
                  <Button>Save</Button>
                </Drawer.Footer>
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Drawer.CloseTrigger>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>

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