import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { onOpen, isOpen, onClose } = useDisclosure()
  // TODO SELECTED IMAGE URL STATE
  const [currentUrl, setCurrentUrl] = useState('')
  // TODO FUNCTION HANDLE VIEW IMAGE
  function handleViewImage(url: string) {
    onOpen();
    setCurrentUrl(url);
  }
  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {
          cards.map((data) =>
            <Card data={data} viewImage={() => handleViewImage(data.url)} />
          )
        }
      </SimpleGrid>
      {/* TODO MODALVIEWIMAGE */}
      <ModalViewImage
        isOpen={isOpen}
        imgUrl={currentUrl}
        onClose={onClose}
      />
    </>
  );
}
