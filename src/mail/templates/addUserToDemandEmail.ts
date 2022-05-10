import { Demand } from '@prisma/client'
import { format, parseISO } from 'date-fns'
import { mailer } from './../../config/mailer'

export const addUserToDemandEmail = async (emailUser: string, demand: Demand) => {

    var email = {
        from: process.env.EMAIL_FROM,
        to: `${emailUser}`,
        subject: `GPE: Você foi adicionado à demanda #${demand.tipo} ${demand.numero}`,
        text: `Você foi adicionado na demanda na data ${format(new Date(), 'dd/MM/yyyy')}`,
        html: `
                <div style="font-family: Heveltica, sans-serif;">
                <div style="background: #ffff98; padding: 10px;">
                    <h3 >Gerenciador Público Eletrônico</h3>
                </div>
                <div style="padding: 10px;">  
                <strong>Módulo de Controle Público e PGM</strong>
            
            
                        <p>Você foi adicionado(a) a demanda <strong>${demand.tipo} - ${demand.numero} - ${demand.assunto}</strong>. O prazo para resposta é até ${format(demand.prazo_resposta, 'dd/MM/yyyy')}</p> 
                </div>
            </div> 
                   

        `,
    }

    mailer.sendMail(email, (error) => {
        
        if (error) {
            console.log(error)
        }
    })

}   