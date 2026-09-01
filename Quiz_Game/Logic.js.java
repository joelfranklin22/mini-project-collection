import java.io.*;
import jakarta.servlet.*;
public class connector extends GenericServlet
{
    public void service(ServletRequest r1,ServletResponse r2)throws IOException,ServletException
    {
                r2.setContentType("text/html");
                PrintWriter in=r2.getWriter();
                String a1=r1.getParameter("a");
                String a2=r1.getParameter("b");
                String a3=r1.getParameter("c");
                String a4=r1.getParameter("d");
                String a5=r1.getParameter("e");   
                in.print(a5);
                String ans=" ",ans2=" ",ans1=" ",ans3=" ",ans4=" ",ans5=" ";
                int sc1=0,sc2=0,sc3=0,sc4=0,sc5=0,count=0;
                
                
                if(a1.equals("Bats") )
                {
                        ans1="Correct answer";
                        sc1=1;
                        count++;
                }
                else 
                {
                        ans1="Wrong Answer";
                         sc1=0;
                }
                if(a2.equals("Mosquito"))
                {
                    ans2="Correct answer";
                     sc2=1;
                     count++;
                }
                else{
                    ans2="Wrong Answer";
                sc2=0;}
               if(a3.equals("Vampire"))
               {
                    sc3=1;
                    ans3="Correct answer";
               count++;
               }
               else{
                    ans3="Wrong Answer";  
               sc3=0;}
               if(a4.equals("Palm"))
               {
                    ans4="Correct answer";
                sc4=1;
                count++;
               }
               else{
                    ans4="Wrong Answer";
               sc4=0;}
               if(a5.equals("Stampede"))
               {
                    sc5=1;
                    count++;
                    ans5="Correct answer";
               }
               else{
                    ans5="Wrong Answer";
               sc5=0;}
                
                
               in.print("<!DOCTYPE html>\n" +
"<html lang=\"en\">\n" +
"<head>\n" +
"    <meta charset=\"UTF-8\">\n" +
"    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
"    <title>Document</title>\n" +
"    <style>\n" +
"        body{\n" +
"            text-align: center;\n" +
"        }\n" +
"        img{\n" +
"            height: 100%;\n" +
"            width: 100%;\n" +
"            position: relative;\n" +
"        }\n" +
"        h1{\n" +
"            position: absolute;\n" +
"            top: 0%;\n" +
"            left:40%;\n" +
"            font-size: 3.5rem;\n" +
"            color: white;\n" +
"            z-index: 2;\n" +
"            text-shadow: 0px 0px 5px black;\n" +
"        }\n" +
"        table{\n" +
"            position: absolute;\n" +
"            top: 23%;\n" +
"            border-collapse: collapse;\n" +
"            border-color: white;\n" +
"            left: 7%;\n" +
"            font-size: 1.5rem;\n" +
"            box-shadow: 0px 0px 10px black,0px 0px 10px black;\n" +
"        }\n" +
"        th{\n" +
"            color: white;\n" +
"            font-size: 1.8rem;\n" +
"        }\n" +
"        td{\n" +
"            box-shadow: 0px 0px 2px black inset;\n" +
"        }\n" +
"        td.ques{\n" +
"            max-width: 500px;\n" +
"            text-wrap:wrap;\n" +
"            text-align: justify;\n" +
"        }\n" +
"        .end{\n" +
"            position: absolute;\n" +
"            bottom: 10%;\n" +
"            left: 38%;\n" +
"            color: white;\n" +
"            font-size: 2.5rem;\n" +
"            text-shadow: 0px 0px 5px rgb(255, 255, 255);\n" +
"        }\n" +
"    </style>\n" +
"</head>\n" +
"<body>\n" +
"    <div class=\"container\">\n" +
"        <h1>Quiz Result</h1>\n" +
"        <img src=\"2.jpg\" alt=\"\">\n" +
"        <table border=\"1\" cellpadding=\"10px\">\n" +
"                    <tr>\n" +
"                        <th>Question</th>\n" +
"                        <th>Your Answer</th>\n" +
"                        <th>Wrong Answer/Correct Answer</th>\n" +
"                        <th>Score</th>\n" +
"                    </tr>\n" +
"                    <tr>\n" +
"                        <td class=\"ques\">1.They fly at night; you'd better run. These winged things are not much fun.</td>\n" +
"                        <td>"+a1+"</td>\n" +
"                        <td>"+ans1+"</td>\n" +
"                        <td>You Scored :"+sc1+"</td>\n" +
"                    </tr>\n" +
"                    <tr>\n" +
"                        <td class=\"ques\">2.A little bite will make you itch, make you sneeze, make you twitch.</td>\n" +
"                        <td>"+a2+"</td>\n" +
"                        <td>"+ans2+"</td>\n" +
"                        <td>You Scored :"+sc2+"</td>\n" +
"                    </tr>\n" +
"                    <tr>\n" +
"                        <td class=\"ques\">3.His fangs are sharp; he likes your taste.</td>\n" +
"                        <td>"+a3+"</td>\n" +
"                        <td>"+ans3+"</td>\n" +
"                        <td>You Scored :"+sc3+"</td>\n" +
"                    </tr>\n" +
"                    <tr>\n" +
"                        <td class=\"ques\">4.They grow much faster than bamboo. Take care, or they'll come after you.</td>\n" +
"                        <td>"+a4+"</td>\n" +
"                        <td>"+ans4+"</td>\n" +
"                        <td>You Scored :"+sc4+"</td>\n" +
"                    </tr>\n" +
"                    <tr>\n" +
"                        <td class=\"ques\">5.Don't be fooled; it isn't thunder. Staying put would be a blunder.</td>\n" +
"                        <td>"+a5+"</td>\n" +
"                        <td>"+ans5+"</td>\n" +
"                        <td>You Scored :"+sc5+"</td>\n" +
"                    </tr>\n" +
"        </table>\n" +
"        <div class=\"end\">You Scored :: "+count+"</div>\n" +
"    </div>\n" +
"</body>\n" +
"</html>");
    }    
}