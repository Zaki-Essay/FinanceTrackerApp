package com.ziko.financetracker;

import com.ziko.financetracker.entites.Candidate;
import com.ziko.financetracker.repository.CandidateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class initDb implements ApplicationRunner {
    private final CandidateRepository candidateRepository;
    @Override
    public void run(ApplicationArguments args) throws Exception {
        for (int i = 0; i < 100; i++) {
            Candidate candidate = Candidate.builder()
                    .name("name"+i)
                    .email("name"+i+"@gmail.com")
                    .age(45)
                    .build();

            candidateRepository.save(candidate);
        }
    }
}
