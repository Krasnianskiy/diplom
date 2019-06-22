package ru.vkras.banking.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.vkras.banking.DTO.CurrencyDTO;

public interface CurrencyRepository extends JpaRepository<CurrencyDTO, Long> {
}
