@programs.each do |program|
  json.set! program.id do
    json.partial! 'api/programs/program', program: program
  end
end
