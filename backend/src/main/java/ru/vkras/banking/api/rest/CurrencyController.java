package ru.vkras.banking.api.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.vkras.banking.DTO.CurrencyDTO;
import ru.vkras.banking.repositories.CurrencyRepository;

import java.util.List;

@RestController("/currency")
public class CurrencyController {

    private CurrencyRepository currencyRepository;

    @RequestMapping("/getAll")
    public List<CurrencyDTO> getAllCurrencies(){
        return currencyRepository.findAll();
    }

    @RequestMapping("/getByID")
    public CurrencyDTO getCurrencyByID(@RequestParam Long id){
        return currencyRepository.findById(id).orElse(null);
    }
}
