package com.ziko.financetracker.entites;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Candidate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public  Long id;

    public String name;

    public String email;

    public Integer age;
}
