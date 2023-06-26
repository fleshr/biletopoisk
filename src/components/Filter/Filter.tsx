"use client";

import { GENRES } from "@/constants/genres";
import { updateFilter } from "@/redux/features/fitlerSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useGetCinemasQuery } from "@/redux/services/cinemasApi";
import { Container } from "../Container/Container";
import { Select } from "../Select/Select";
import { SelectOption } from "../Select/SelectOption/SelectOption";
import { TextInput } from "../TextInput/TextInput";
import { FilterOption } from "./FilterOption/FilterOption";
import styles from "./styles.module.css";

export const Filter = () => {
  const { data: cinemas } = useGetCinemasQuery();
  const dispatch = useAppDispatch();

  const genresOptions = Object.entries(GENRES).map(([key, value]) => (
    <SelectOption key={key} value={key}>
      {value}
    </SelectOption>
  ));

  const cinemasOptions = cinemas?.map((cinema) => (
    <SelectOption key={cinema.id} value={cinema.id}>
      {cinema.name}
    </SelectOption>
  ));

  return (
    <Container className={styles.container}>
      <h2 className={styles.title}>Фильтр поиска</h2>
      <div className={styles.options}>
        <FilterOption title="Название">
          <TextInput
            placeholder="Введите название"
            onChange={(value) =>
              dispatch(updateFilter({ filter: "name", value }))
            }
          />
        </FilterOption>
        <FilterOption title="Жанр">
          <Select
            placeholder="Выберите жанр"
            onSelect={(value) =>
              dispatch(updateFilter({ filter: "genre", value }))
            }
          >
            {genresOptions}
          </Select>
        </FilterOption>
        <FilterOption title="Кинотеатр">
          <Select
            placeholder="Выберите кинотеатр"
            onSelect={(value) =>
              dispatch(updateFilter({ filter: "cinema", value }))
            }
          >
            {cinemasOptions}
          </Select>
        </FilterOption>
      </div>
    </Container>
  );
};
