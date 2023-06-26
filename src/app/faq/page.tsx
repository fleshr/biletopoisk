import { Accordion } from "@/components/Accordion/Accordion";
import { AccordionDetails } from "@/components/Accordion/AccordionDetails/AccordionDetails";
import { AccordionHeader } from "@/components/Accordion/AccordionHeader/AccordionHeader";
import { Container } from "@/components/Container/Container";
import styles from "./styles.module.css";

export default function Page() {
  return (
    <div>
      <Container className={styles.container}>
        <h1>Вопросы-ответы</h1>
      </Container>
      <div className={styles.accodions}>
        <Accordion>
          <AccordionHeader>
            <h2 className={styles.accordionTitle}>Что такое Билетопоиск?</h2>
          </AccordionHeader>
          <AccordionDetails>
            <p>
              Мы — крупнейший сервис о кино в рунете. На нем вы сможете
              посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги
              популярных видео и интересные факты, поставить фильмам оценки,
              написать рецензии и дополнить описание фильмов.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionHeader>
            <h2 className={styles.accordionTitle}>
              Какой компании принадлежит Билетопоиск?
            </h2>
          </AccordionHeader>
          <AccordionDetails>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
              iste voluptatem dicta, quaerat ad unde?
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionHeader>
            <h2 className={styles.accordionTitle}>
              Как купить билет на Билетопоиск?
            </h2>
          </AccordionHeader>
          <AccordionDetails>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
              iste voluptatem dicta, quaerat ad unde?
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionHeader>
            <h2 className={styles.accordionTitle}>
              Как оставить отзыв на Билетопоиск?
            </h2>
          </AccordionHeader>
          <AccordionDetails>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
              iste voluptatem dicta, quaerat ad unde?
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
