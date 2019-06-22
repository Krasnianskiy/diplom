package ru.vkras.banking.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.vkras.banking.DTO.BankDTO;

public interface BankingRepository extends JpaRepository<BankDTO, Long> {
}
