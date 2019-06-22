package ru.vkras.banking.api.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.vkras.banking.DTO.BankDTO;
import ru.vkras.banking.repositories.BankingRepository;

import java.util.List;

@RestController("/bank")
public class BankingController {

    private BankingRepository bankingRepository;

    @RequestMapping("/getAllBanks")
    public List<BankDTO> getAllBanks(){
        return bankingRepository.findAll();
    }

    @RequestMapping("/getBank")
    public BankDTO getBankByID(@RequestParam Long id){
        return bankingRepository.findById(id).orElse(null);
    }
}
