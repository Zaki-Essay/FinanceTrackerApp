package com.ziko.financetracker.api;

import com.ziko.financetracker.entites.Candidate;
import com.ziko.financetracker.repository.CandidateRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class CandidateController {

    private final CandidateRepository candidateRepository;

    @GetMapping("/candidates")
    public List<Candidate> getAllCandidate(){
        return candidateRepository.findAll();
    }


}
