const connection = require('../../database/connection');

module.exports = {
  async index(request, response){
    const { cpf } = request.query;

    const patient = await connection('patient')
      .select('patient.cpf', 'patient.name', 'patient.responsibleName', 'doctor.name as doctorName')
      .join('doctor', 'patient.doctorCpf', '=', 'doctor.cpf')
      .where('patient.cpf', cpf)
      .first();

    if(!patient){
      return response.status(404).json({ error: 'Patient not found' });
    }

    return response.status(200).json(patient);
  },

  async create(request, response){

    const { cpf, name, responsibleName, doctorCpf } = request.body;
    
    const user = await connection('patient').insert({
      cpf, 
      name,
      responsibleName,
      doctorCpf,
    })

    return response.json(user);
  }
}