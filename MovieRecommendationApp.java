import java.util.*;
import java.util.stream.Collectors;

// 1. Movie Model - To Store the Movies
class Movie {
    private int id;
    private String title;
    private String genre;
    private double rating;

    public Movie(int id, String title, String genre, double rating) {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.rating = rating;
    }

    // Getters
    public String getTitle() { return title; }
    public String getGenre() { return genre; }
    public double getRating() { return rating; }

    @Override
    public String toString() {
        return String.format("| %-15s | %-12s | Rating: %.1f |", title, genre, rating);
    }
}
// 2. Recommendation Engine (Main Class)
public class MovieRecommendationApp {

    public static void main(String[] args) {
        List<Movie> movieDatabase = new ArrayList<>();
// Movies List
        movieDatabase.add(new Movie(1, "Vikram", "Action", 4.8));
        movieDatabase.add(new Movie(2, "Inception", "Sci-Fi", 4.9));
        movieDatabase.add(new Movie(3, "Baahubali", "Action", 4.8));
        movieDatabase.add(new Movie(4, "96", "Romance", 4.6));
        movieDatabase.add(new Movie(5, "KGF", "Action", 4.5));
        movieDatabase.add(new Movie(6, "Interstellar", "Sci-Fi", 4.9));
        movieDatabase.add(new Movie(7, "Doctor", "Comedy", 4.4));
        movieDatabase.add(new Movie(8, "Chennai 28", "Comedy", 4.5));
        movieDatabase.add(new Movie(9, "Ratsasan", "Thriller", 4.8));
        movieDatabase.add(new Movie(10, "Leo", "Action", 4.6));
        movieDatabase.add(new Movie(11, "Jailer", "Action", 4.7));
        movieDatabase.add(new Movie(12, "Greatest of All Time(GOAT)", "Action", 3.8));
        movieDatabase.add(new Movie(13, "Kanthara", "Thriller", 4.7));
        movieDatabase.add(new Movie(14, "Indru netru naalai", "Sci-Fi", 4.6));
        movieDatabase.add(new Movie(15, "144", "Comedy", 4.6));
        movieDatabase.add(new Movie(16, "24", "Sci-Fi", 4.4));
        movieDatabase.add(new Movie(17, "Ambuli", "Thriller", 4.6));
        movieDatabase.add(new Movie(18, "Enthiran", "Sci-Fi", 4.4));
        movieDatabase.add(new Movie(19, "Thodari", "Romance", 4.6));
        movieDatabase.add(new Movie(20, "Aan Paavam Pollathathu", "Romance", 4.3));
        movieDatabase.add(new Movie(21, "Thani Oruvan", "Action", 4.7));
        movieDatabase.add(new Movie(22, "Good Bad Ugly", "Action", 4.6));
        movieDatabase.add(new Movie(23, "Maatran", "Sci-Fi", 4.6));
        movieDatabase.add(new Movie(24, "Vallavanukku Pullum Aaiutham", "Comedy", 4.1));
        movieDatabase.add(new Movie(25, "23rd Pulikesi", "Comedy", 4.5));
        movieDatabase.add(new Movie(26, "7am Arivu", "Sci-Fi", 4.8));
        movieDatabase.add(new Movie(27, "Tik Tik Tik", "Sci-Fi", 4.4));
        movieDatabase.add(new Movie(28, "Ayalan", "Sci-Fi", 4.3));
        movieDatabase.add(new Movie(29, "Mark Antany", "Sci-Fi", 4.2));
        movieDatabase.add(new Movie(30, "Soodhu Kavvum", "Sci-Fi", 4.5));

        // 4. The User Select the movies(Input simulation)
        Scanner scanner = new Scanner(System.in);
        System.out.println("--- Welcome to CineSmart ---");
        System.out.println("Available Movies: Vikram, Inception, 96, Doctor, Ratsasan...");
        System.out.print("Enter a movie name you liked: ");
        String userChoice = scanner.nextLine();

        // 5. Getting the details of the Movie
        Movie selectedMovie = movieDatabase.stream()
                .filter(m -> m.getTitle().equalsIgnoreCase(userChoice))
                .findFirst()
                .orElse(null);

        if (selectedMovie != null) {
            System.out.println("\nYou liked: " + selectedMovie.getTitle() + " [" + selectedMovie.getGenre() + "]");
            System.out.println("\nSince you liked " + selectedMovie.getGenre() + ", you may also like:");
            System.out.println("---------------------------------------------------------");

            // 6. RECOMMENDATION LOGIC
            List<Movie> recommendations = movieDatabase.stream()
                    .filter(m -> m.getGenre().equals(selectedMovie.getGenre()))
                    .filter(m -> !m.getTitle().equalsIgnoreCase(selectedMovie.getTitle())) 
                    .sorted((m1, m2) -> Double.compare(m2.getRating(), m1.getRating()))
                    .limit(29) 
                    .collect(Collectors.toList());

            // 7. Finding the Result
            if (recommendations.isEmpty()) {
                System.out.println("No similar movies found in this genre yet!");
            } else {
                recommendations.forEach(System.out::println);
            }
        } else {
            System.out.println("Movie not found in our database!");
        }

        scanner.close();
    }
}
