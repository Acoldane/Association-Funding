package com.funding.backend.beans;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "donations")
public class Donation implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="event_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Evenement event;

    @OneToOne()
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    private Double amount;

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public void setEvent(Evenement event) {
        this.event = event;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Double getAmount() {
        return amount;
    }

    public Long getId() {
        return id;
    }

    public Evenement getEvent() {
        return event;
    }

    public User getUser() {
        return user;
    }
}
