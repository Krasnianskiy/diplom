package ru.vkras.banking.api.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.vkras.banking.DTO.BankDTO;
import ru.vkras.banking.repositories.BankingRepository;

import java.util.List;

@RestController
@RequestMapping("/bank")
public class BankingController {

    @Autowired
    private BankingRepository bankingRepository;

    @RequestMapping("/getAllBanks")
    public List<BankDTO> getAllBanks(){
        return bankingRepository.findAll();
    }

    @RequestMapping("/create")
    public BankDTO createBank(@RequestBody BankDTO bankDTO) {
        return bankingRepository.save(bankDTO);
    }

    @RequestMapping("/getBank")
    public BankDTO getBankByID(@RequestParam Long id){
        return bankingRepository.findById(id).orElse(null);
    }
}
