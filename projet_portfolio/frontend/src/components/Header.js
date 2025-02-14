import React from "react"; 

<header>
        <h1>Bienvenue sur notre plateforme interactive d'événements</h1>
        <nav class="navbar">
            <!-- Menu Hamburger -->
            <div class="menu-toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <!-- Menu Navigation -->
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="{% url 'index' %}" class="nav-link">Accueil</a>
                </li>
                <li class="nav-item">
                    <a href="{% url 'Événements' %}" class="nav-link">Événements</a>
                </li>
                <li class="nav-item">
                    <a href="{% url 'Galerie - YOULIVE' %}" class="nav-link">Galerie</a>
                </li>
                <li class="nav-item">
                    <a href="{% url 'Prestations - YOULIVE' %}" class="nav-link">Prestations</a>
                </li>
                <li class="nav-item">
                    <a href="{% url 'Contact - YOULIVE' %}" class="nav-link">Contact</a>
                </li>
            </ul>
        </nav>
    </header>
